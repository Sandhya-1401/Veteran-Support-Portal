// const Job = require("../models/Job");

// // ✅ Get all jobs
// const getAllJobs = async (req, res) => {
//     try {
//         const jobs = await Job.find();
//         res.status(200).json(jobs);
//     } catch (error) {
//         res.status(500).json({ msg: "Server error", error: error.message });
//     }
// };

// module.exports = { 
//     getAllJobs 
// };

const Job = require("../models/Job");

// ✅ Get all jobs
const getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// ✅ Create a new job
const createJob = async (req, res) => {
    try {
        const { title, description, company, location, salary } = req.body;
        const newJob = new Job({ title, description, company, location, salary });
        await newJob.save();
        res.status(201).json(newJob);
    } catch (error) {
        res.status(500).json({ msg: "Server error", error: error.message });
    }
};

// ✅ Make sure both functions are exported correctly
module.exports = { getAllJobs, createJob };
