const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const uuidv4 = require('uuid').v4;
const Admin = require('../models/adminmodel');
const Student = require('../models/studentmodel');
const Complaint = require('../models/complaintmodel');
const Food = require('../models/foodmodel');
const Notice = require('../models/noticemodel');
const Leave = require('../models/leavemodel');
const Fee = require('../models/feesmodel');
const activeSessions = new Map();



router.get('/', (req, res) => {
  res.render('index');
});

router.get('/defaultfood', async (req, res) => {
  const defaultFoodMenu = [
    { day: 'Monday', breakfast: 'Poa Batata', lunch: 'Batata saak', dinner: 'Veg Biryani' },
    { day: 'Tuesday', breakfast: 'Aloo Parotha', lunch: 'Mag saak', dinner: 'Chinese' },
    { day: 'Wednesday', breakfast: 'Masala Puri', lunch: 'Suki Bhaji', dinner: 'Pani Puri' },
    { day: 'Thursday', breakfast: 'Bhakhari', lunch: 'Bhinda saak', dinner: 'Paneer & Parotha' },
    { day: 'Friday', breakfast: 'Idli', lunch: 'Rajma', dinner: 'Sandwitch' },
    { day: 'Saturday', breakfast: 'Thepala', lunch: 'Tuver saak', dinner: 'Bhakhari & Sev Tomato' },
    { day: 'Sunday', breakfast: 'Samosa', lunch: 'Corn Capsicum', dinner: 'South Indian' }
  ];

  try {
    const existingFoodMenu = await Food.find();
    if (existingFoodMenu.length === 0) {
      await Food.insertMany(defaultFoodMenu.map(item => ({ ...item, createdBy: 'admin' })));
      console.log('Default food menu data saved successfully.');
      res.send('Default food menu data saved successfully.');
    } else {
      console.log('Default food menu data already exists in the database.');
      res.send('Default food menu data already exists in the database.');
    }
  } catch (error) {
    console.error('Error saving default food menu data:', error);
    res.status(500).send('Error saving default food menu data.');
  }
});
router.get('/admin/login', (req, res) => {
  res.render('adminLogin');
});

router.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await Admin.findByUsername(username);
    if (!admin) {
      return res.status(400).send('Invalid username or password');
    }
    admin.authenticate(password, (err, result) => {
      if (err || !result) {
        return res.status(400).send('Invalid username or password');
      }
      req.session.admin = admin;
      res.redirect('/admin/dashboard');
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/student/login', (req, res) => {
  res.render('studentLogin');
});

router.post('/student/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const student = await Student.findByUsername(username);
    if (!student) {
      return res.status(400).send('Invalid username or password');
    }
    student.authenticate(password, (err, result) => {
      if (err || !result) {
        return res.status(400).send('Invalid username or password');
      }
      const sessionId = uuidv4();
      activeSessions.set(sessionId, { student });
      res.status(200).json({ sessionId });
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/student/dashboard/:sessionId', async (req, res) => {
  const { sessionId } = req.params;

  if (activeSessions.has(sessionId)) {
    const sessionData = activeSessions.get(sessionId);
    if (sessionData && sessionData.student) {
      const student = sessionData.student;
      res.json({ student });
    } else {
      res.status(400).send('Student information missing');
    }
  } else {
    res.status(401).json({ error: 'Unauthorized' });
  }
});




router.get('/admin/students-data', async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ students });
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/admin/students/update/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    res.render('updateStudent', { student });
  } catch (error) {
    console.error('Error fetching student data for update:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/admin/students/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedStudentData = req.body;
  try {
    const updatedStudent = await Student.findByIdAndUpdate(id, updatedStudentData, { new: true });
    res.redirect('/admin/students-data');
  } catch (error) {
    console.error('Error updating student data:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/dashboard', (req, res) => {
  res.render('adminDashboard');
});
router.get('/student/food-menu', async (req, res) => {
  try {
    const foodMenu = await Food.find();
    res.json({ foodMenu });

  } catch (error) {
    console.error('Error fetching food menu:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/food-menu', async (req, res) => {
  try {
    const foodMenu = await Food.find();
    res.json({ foodMenu });
  } catch (error) {
    console.error('Error fetching food menu:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/food-menu/update/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const foodItem = await Food.findById(id);
    res.json({ foodItem });
  } catch (error) {
    console.error('Error fetching food item:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.put('/admin/food-menu/update/:id', async (req, res) => {
  const { id } = req.params;
  const updatedFoodItem = req.body;
  try {
    const foodItem = await Food.findByIdAndUpdate(id, updatedFoodItem, { new: true });
    res.json({ foodItem });
  } catch (error) {
    console.error('Error updating food item:', error);
    res.status(500).send('Internal Server Error');
  }
});
router.get('/admin/add-student', (req, res) => {
  res.render('addStudent');
});


router.post('/admin/add-student', async (req, res) => {
  const { username, password, fullName, email, phone, address, roomNo, collegeID, collegeCourse, year, guardianName, guardianPhone, guardianEmail } = req.body;
  try {
    const student = new Student({
      username,
      password,
      fullName,
      email,
      phone,
      address,
      roomNo,
      collegeID,
      collegeCourse,
      year,
      guardianName,
      guardianPhone,
      guardianEmail
    });
    await student.setPassword(req.body.password);
    await student.save();

    res.redirect('/admin/dashboard');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/add-notice', (req, res) => {
  res.render('addNotice');
});

router.post('/admin/add-notice', async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNotice = await Notice.create({ title, content });
    res.redirect('/admin/notices');
  } catch (error) {
    console.error('Error adding notice:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/delete-notice/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Notice.findByIdAndDelete(id);
    res.redirect('/admin/notices');
  } catch (error) {
    console.error('Error deleting notice:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/admin/notices', async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json({ notices });
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/student/notice-board', async (req, res) => {
  try {
    const notices = await Notice.find();
    res.json({ notices });
  } catch (error) {
    console.error('Error fetching notices:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/student/add-complaint', (req, res) => {
  res.render('complaintForm');
});

router.post('/student/complaints', async (req, res) => {
  const { type, description } = req.body;

  if (!req.body.name || !req.body.roomNumber) {
    return res.status(400).send('Student information missing');
  }

  const { name, roomNumber } = req.body;

  try {
    const complaint = await Complaint.create({ name, roomNumber, type, description });
    res.status(201).send('Complaint submitted successfully');
  } catch (error) {
    console.error('Error submitting complaint:', error);
    res.status(500).send('Internal Server Error');
  }
});
router.get('/admin/complaints', async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json({ complaints });
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/admin/complaints/:id/update', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const updatedComplaint = await Complaint.findByIdAndUpdate(id, { status }, { new: true });
    if (!updatedComplaint) {
      return res.status(404).send('Complaint not found');
    }
    res.status(200).send('Complaint status updated successfully');
  } catch (error) {
    console.error('Error updating complaint status:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/student/add-complaint', (_req, res) => {
  res.render('complaintForm');
});

router.post('/student/submit-leave', async (req, res) => {
  const { studentName, roomNo, startDate, endDate, reason, place } = req.body;

  try {

    const leave = await Leave.create({ studentName, roomNo, startDate, endDate, reason, place });
    res.status(201).send('Leave submitted successfully');
  } catch (error) {
    console.error('Error submitting leave:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/student/leave', (_req, res) => {
  res.render('leaveForm');
});

router.get('/admin/leave-requests', async (_req, res) => {
  try {

    const leaves = await Leave.find();

    res.json({ leaves });
  } catch (error) {
    console.error('Error fetching leave requests:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.post('/admin/leave-requests/:id/approve', async (req, res) => {
  const leaveId = req.params.id;
  try {
    await Leave.findByIdAndUpdate(leaveId, { status: 'approved' });
    res.redirect('/admin/leave-requests');
  } catch (error) {
    console.error('Error approving leave request:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/admin/leave-requests/:id/reject', async (req, res) => {
  const leaveId = req.params.id;
  try {
    await Leave.findByIdAndUpdate(leaveId, { status: 'rejected' });
    res.redirect('/admin/leave-requests');
  } catch (error) {
    console.error('Error rejecting leave request:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get("/student/fees", async (req, res) => {
  try {
    const fees = await Fee.findOne({}, { _id: 0, __v: 0 });

    if (fees) {
      res.status(200).json(fees);
    } else {
      res.status(404).json({ message: "Fee structure not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/fees", async (req, res) => {
  try {
    let fees = await Fee.findOne({});

    if (!fees) {
      fees = new Fee({});
    }

    fees.acRoomFee = req.body.acRoomFee;
    fees.nonAcRoomFee = req.body.nonAcRoomFee;
    fees.foodFee = req.body.foodFee;

    await fees.save();

    const updatedFees = await Fee.findOne({});

    res.status(200).json(updatedFees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
