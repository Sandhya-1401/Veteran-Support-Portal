# **How to Use Veteran Support & Assistance Portal 🎖️**  

This guide explains how to set up and run the **Veteran Support & Assistance Portal** on your local machine.  

## 🛠 Prerequisites  
Before starting, ensure you have the following installed:  

✔ **Node.js** (**[Download Here](https://nodejs.org/)**) <br>
✔ **Git** (**[Download Here](https://git-scm.com/)**) <br>
✔ **MongoDB** (For local database usage)  <br>
  
## 🚀 Installation & Setup  

### **1️⃣ Clone the Repository**  
Open a terminal and run:  
```sh
git clone https://github.com/Sandhya-1401/Veteran-Support-Portal.git
cd Veteran-Support-Portal
```

### **2️⃣ Extract the Compressed Files**  
- Unzip the compressed `node_modules` folders inside:  
  - `frontend/` → for frontend dependencies  
  - `backend/` → for backend dependencies  

### **3️⃣ Install Dependencies**  
Since `node_modules` was compressed, verify dependencies by running:  

#### **Frontend Setup**  
```sh
cd frontend
npm install
npm start
```
- This will install missing dependencies and start the Angular frontend.  

#### **Backend Setup**  
Open a new terminal and run:  
```sh
cd backend
npm install
npm start
```
- This will install backend dependencies and start the Express.js server.  

### **4️⃣ Setup Environment Variables**  
Create a `.env` file inside the `backend` folder and add:  
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
*(Replace values as per your setup.)*  

### **5️⃣ Run the Project**  
- **Frontend:** Runs on `http://localhost:4200/`  
- **Backend API:** Runs on `http://localhost:5000/`  

🎉 **Your project is now up & running !! 🚀**  

## 🙌 Contributing & Support  
If you encounter any issues or want to contribute, feel free to **Raise an issue** or **Submit a pull request**  <br>

**📬 Contact** <br>
**Developed by:** Rana Sandhya <br>
**Email:** ranasandhya093@gmail.com <br>
**GitHub:** [Link](github.com/Sandhya-1401)<br>
**LinkedIn:** [Link](linkedin.com/in/rana-sandhya1729)<br>

**Thank You**
