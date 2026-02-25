/*import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Dashboard() {

  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const incomeRes = await axios.get("http://localhost:8086/income");
      const expenseRes = await axios.get("http://localhost:8086/expenses");

      const incomeTotal = incomeRes.data.reduce((sum, item) => sum + item.amount, 0);
      const expenseTotal = expenseRes.data.reduce((sum, item) => sum + item.amount, 0);

      setTotalIncome(incomeTotal);
      setTotalExpenses(expenseTotal);

    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const remaining = totalIncome - totalExpenses;

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <h3 className="mb-4 fw-bold text-center">
          💰 Personal Finance Dashboard
        </h3>

        <div className="row g-4">

          
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 bg-success text-white dashboard-card">
              <div className="card-body text-center p-4">
                <h6 className="text-uppercase">Total Income</h6>
                <h2 className="fw-bold mt-2">₹{totalIncome}</h2>
              </div>
            </div>
          </div>

         
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 bg-danger text-white dashboard-card">
              <div className="card-body text-center p-4">
                <h6 className="text-uppercase">Total Expenses</h6>
                <h2 className="fw-bold mt-2">₹{totalExpenses}</h2>
              </div>
            </div>
          </div>

         
          <div className="col-md-4">
            <div className="card shadow-lg border-0 rounded-4 bg-primary text-white dashboard-card">
              <div className="card-body text-center p-4">
                <h6 className="text-uppercase">Remaining Budget</h6>
                <h2 className="fw-bold mt-2">₹{remaining}</h2>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;



*/
/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function Dashboard() {

  const userId = 11; // change according to logged in user

  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8086/dashboard/${userId}`
      );
      setData(res.data);
    } catch (error) {
      console.log("Dashboard error:", error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">
         <h3 className="text-center">Personal Finance Dashboard</h3>

        <div className="row mt-4">

          <div className="col-md-4">
            <div className="card p-3 text-center bg-success text-white">
              <h5>Total Income</h5>
              <h4>₹{data.totalIncome}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 text-center bg-danger text-white">
              <h5>Total Expense</h5>
              <h4>₹{data.totalExpense}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card p-3 text-center bg-primary text-white">
              <h5>Remaining Balance</h5>
              <h4>₹{data.balance}</h4>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
*/
/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaMoneyBillWave, FaShoppingCart, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const userId = currentUser?.id;

  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });

  useEffect(() => {

    if (!userId) {
      navigate("/");
      return;
    }

    axios
      .get(`http://localhost:8086/dashboard/${userId}`)
      .then((res) => {
        console.log("Dashboard Data:", res.data);
        setData(res.data);
      })
      .catch((error) => console.log("Dashboard error:", error));

  }, [userId, navigate]);

  const expensePercent = data.totalIncome
    ? Math.min((data.totalExpense / data.totalIncome) * 100, 100)
    : 0;

  const balancePercent = data.totalIncome
    ? Math.min((data.balance / data.totalIncome) * 100, 100)
    : 0;

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3 className="text-center mb-4">Personal Finance Dashboard</h3>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-success text-white">
              <FaMoneyBillWave size={40} className="mb-2" />
              <h5>Total Income</h5>
              <h4>₹{data.totalIncome}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-danger text-white">
              <FaShoppingCart size={40} className="mb-2" />
              <h5>Total Expense</h5>
              <h4>₹{data.totalExpense}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-primary text-white">
              <FaWallet size={40} className="mb-2" />
              <h5>Remaining Balance</h5>
              <h4>₹{data.balance}</h4>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
*/
/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaMoneyBillWave, FaShoppingCart, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // 🔴 If not logged in → redirect to login
    if (!currentUser || !currentUser.id) {
      navigate("/");
      return;
    }

    const userId = currentUser.id;

    axios
      .get(`http://localhost:8086/dashboard/${userId}`)
      .then((res) => {
        if (res.data) {
          setData({
            totalIncome: res.data.totalIncome || 0,
            totalExpense: res.data.totalExpense || 0,
            balance: res.data.balance || 0
          });
        }
      })
      .catch((error) => {
        console.error("Dashboard error:", error);
      });

  }, [navigate]);

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3 className="text-center mb-4">Personal Finance Dashboard</h3>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-success text-white">
              <FaMoneyBillWave size={40} className="mb-2" />
              <h5>Total Income</h5>
              <h4>₹{data.totalIncome}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-danger text-white">
              <FaShoppingCart size={40} className="mb-2" />
              <h5>Total Expense</h5>
              <h4>₹{data.totalExpense}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-primary text-white">
              <FaWallet size={40} className="mb-2" />
              <h5>Remaining Balance</h5>
              <h4>₹{data.balance}</h4>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;*//*
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaMoneyBillWave, FaShoppingCart, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // ✅ check correct userId field
    if (!currentUser || !currentUser.userId) {
      navigate("/"); // redirect to login if user not found
      return;
    }

    const userId = currentUser.userId;

    axios
      .get(`http://localhost:8086/dashboard/${userId}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log("Dashboard error:", error));
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <h3 className="text-center mb-4">Personal Finance Dashboard</h3>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-success text-white">
              <FaMoneyBillWave size={40} className="mb-2" />
              <h5>Total Income</h5>
              <h4>₹{data.totalIncome}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-danger text-white">
              <FaShoppingCart size={40} className="mb-2" />
              <h5>Total Expense</h5>
              <h4>₹{data.totalExpense}</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-primary text-white">
              <FaWallet size={40} className="mb-2" />
              <h5>Remaining Balance</h5>
              <h4>₹{data.balance}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;*/
/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaMoneyBillWave, FaShoppingCart, FaWallet, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });
  const [username, setUsername] = useState(""); // for logged-in user's name

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.userId) {
      navigate("/"); // redirect to login if not logged in
      return;
    }

    setUsername(currentUser.username || "User"); // set username

    const userId = currentUser.userId;

    axios
      .get(`http://localhost:8086/dashboard/${userId}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log("Dashboard error:", error));
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        
        <h3 className="text-center mb-3">
          <FaUser className="me-2" />
          Welcome, {username}!
        </h3>

        <h3 className="text-center mb-4">Personal Finance Dashboard</h3>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-success text-white">
              <FaMoneyBillWave size={40} className="mb-2" />
              <h5>Total Income</h5>
              <h4>₹{data.totalIncome}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-danger text-white">
              <FaShoppingCart size={40} className="mb-2" />
              <h5>Total Expense</h5>
              <h4>₹{data.totalExpense}</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm p-3 text-center bg-primary text-white">
              <FaWallet size={40} className="mb-2" />
              <h5>Remaining Balance</h5>
              <h4>₹{data.balance}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;*/
/*
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaMoneyBillWave, FaShoppingCart, FaWallet, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });
  const [username, setUsername] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.userId) {
      navigate("/"); // redirect to login
      return;
    }

    setUsername(currentUser.username || "User");
    const userId = currentUser.userId;

    axios
      .get(`http://localhost:8086/dashboard/${userId}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log("Dashboard error:", error));
  }, [navigate]);

  const expensePercent = data.totalIncome
    ? Math.min((data.totalExpense / data.totalIncome) * 100, 100)
    : 0;

  const balancePercent = data.totalIncome
    ? Math.min((data.balance / data.totalIncome) * 100, 100)
    : 0;

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3 className="text-center mb-2">
          <FaUser className="me-2" /> Welcome, {username}!
        </h3>
        <h4 className="text-center mb-4">💰 Personal Finance Dashboard</h4>

        <div className="row g-4">

   
          <div className="col-md-4">
            <div className="card shadow-lg p-3 text-center bg-success text-white rounded-4">
              <FaMoneyBillWave size={40} className="mb-2" />
              <h5>Total Income</h5>
              <h3>₹{data.totalIncome}</h3>
            </div>
          </div>

        
          <div className="col-md-4">
            <div className="card shadow-lg p-3 text-center bg-danger text-white rounded-4">
              <FaShoppingCart size={40} className="mb-2" />
              <h5>Total Expense</h5>
              <h3>₹{data.totalExpense}</h3>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: `${expensePercent}%` }}
                  aria-valuenow={expensePercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>{expensePercent.toFixed(1)}% of income spent</small>
            </div>
          </div>

         
          <div className="col-md-4">
            <div className="card shadow-lg p-3 text-center bg-primary text-white rounded-4">
              <FaWallet size={40} className="mb-2" />
              <h5>Remaining Balance</h5>
              <h3>₹{data.balance}</h3>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-light"
                  role="progressbar"
                  style={{ width: `${balancePercent}%` }}
                  aria-valuenow={balancePercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>{balancePercent.toFixed(1)}% of income remaining</small>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;*//*
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaMoneyBillWave, FaShoppingCart, FaWallet, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });
  const [username, setUsername] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.userId) {
      navigate("/"); // redirect to login
      return;
    }

    setUsername(currentUser.username || "User");
    const userId = currentUser.userId;

    axios
      .get(`http://localhost:8086/dashboard/${userId}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log("Dashboard error:", error));
  }, [navigate]);

  const incomePercent = 100; // Total income = 100%
  const expensePercent = data.totalIncome
    ? Math.min((data.totalExpense / data.totalIncome) * 100, 100)
    : 0;
  const balancePercent = data.totalIncome
    ? Math.min((data.balance / data.totalIncome) * 100, 100)
    : 0;

  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <h3 className="text-center mb-2">
          <FaUser className="me-2" /> Welcome, {username}!
        </h3>
        <h4 className="text-center mb-4">💰 Personal Finance Dashboard</h4>

        <div className="row g-4">

         
          <div className="col-md-4">
            <div className="card shadow-lg p-3 text-center bg-success text-white rounded-4">
              <FaMoneyBillWave size={40} className="mb-2" />
              <h5>Total Income</h5>
              <h3>₹{data.totalIncome}</h3>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-light"
                  role="progressbar"
                  style={{ width: `${incomePercent}%` }}
                  aria-valuenow={incomePercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>100% of income</small>
            </div>
          </div>

        
          <div className="col-md-4">
            <div className="card shadow-lg p-3 text-center bg-danger text-white rounded-4">
              <FaShoppingCart size={40} className="mb-2" />
              <h5>Total Expense</h5>
              <h3>₹{data.totalExpense}</h3>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-dark"
                  role="progressbar"
                  style={{ width: `${expensePercent}%` }}
                  aria-valuenow={expensePercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>{expensePercent.toFixed(1)}% of income spent</small>
            </div>
          </div>

         
          <div className="col-md-4">
            <div className="card shadow-lg p-3 text-center bg-primary text-white rounded-4">
              <FaWallet size={40} className="mb-2" />
              <h5>Remaining Balance</h5>
              <h3>₹{data.balance}</h3>
              <div className="progress mt-2" style={{ height: "10px" }}>
                <div
                  className="progress-bar bg-light"
                  role="progressbar"
                  style={{ width: `${balancePercent}%` }}
                  aria-valuenow={balancePercent}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <small>{balancePercent.toFixed(1)}% of income remaining</small>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;*/

import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { FaMoneyBillWave, FaShoppingCart, FaWallet, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    totalIncome: 0,
    totalExpense: 0,
    balance: 0
  });

  const [username, setUsername] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || !currentUser.userId) {
      navigate("/");
      return;
    }

    setUsername(currentUser.username || "User");
    const userId = currentUser.userId;

    axios
      .get(`http://localhost:8086/dashboard/${userId}`)
      .then((res) => setData(res.data))
      .catch((error) => console.log("Dashboard error:", error));
  }, [navigate]);

  const expensePercent = data.totalIncome
    ? Math.min((data.totalExpense / data.totalIncome) * 100, 100)
    : 0;

  const balancePercent = data.totalIncome
    ? Math.min((data.balance / data.totalIncome) * 100, 100)
    : 0;

  return (
    <>
      <Navbar />

      <div
        className="min-vh-100 py-5"
        style={{
          background: "linear-gradient(to right, #e0f7fa, #f8f9fa)"
        }}
      >
        <div className="container">

         
          <div className="text-center mb-5">
            <h3 className="fw-bold">
              <FaUser className="me-2" />
              Welcome, {username} 👋
            </h3>
            <h4 className="fw-bold display-6 mt-2">
              💰 Personal Finance Dashboard
            </h4>
          </div>

          <div className="row g-4">

          
            <div className="col-md-4">
              <div
                className="card dashboard-card text-white text-center p-4 border-0 rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #28a745, #20c997)"
                }}
              >
                <FaMoneyBillWave size={45} className="mb-3" />
                <h5>Total Income</h5>
                <h2 className="fw-bold display-6">₹{data.totalIncome}</h2>

                <div className="progress mt-3" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-light"
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <small>100% of income</small>
              </div>
            </div>

           
            <div className="col-md-4">
              <div
                className="card dashboard-card text-white text-center p-4 border-0 rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #dc3545, #ff6b6b)"
                }}
              >
                <FaShoppingCart size={45} className="mb-3" />
                <h5>Total Expense</h5>
                <h2 className="fw-bold display-6">₹{data.totalExpense}</h2>

                <div className="progress mt-3" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-dark"
                    style={{ width: `${expensePercent}%` }}
                  ></div>
                </div>
                <small>{expensePercent.toFixed(1)}% of income spent</small>
              </div>
            </div>

           
            <div className="col-md-4">
              <div
                className="card dashboard-card text-white text-center p-4 border-0 rounded-4 shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #007bff, #6610f2)"
                }}
              >
                <FaWallet size={45} className="mb-3" />
                <h5>Remaining Balance</h5>
                <h2 className="fw-bold display-6">₹{data.balance}</h2>

                <div className="progress mt-3" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-light"
                    style={{ width: `${balancePercent}%` }}
                  ></div>
                </div>
                <small>{balancePercent.toFixed(1)}% of income remaining</small>
              </div>
            </div>

          </div>

          
          <div className="row mt-5">
            <div className="col-md-12">
              <div className="card shadow-sm p-4 rounded-4 border-0 text-center">
                <h5 className="fw-bold mb-3">📊 Financial Summary</h5>
                <p className="mb-1">
                  You have spent <strong>{expensePercent.toFixed(1)}%</strong> of your income.
                </p>
                <p>
                  You have saved <strong>{balancePercent.toFixed(1)}%</strong> of your income.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    
      <style>
        {`
          .dashboard-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .dashboard-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 30px rgba(0,0,0,0.2);
          }
        `}
      </style>
    </>
  );
}

export default Dashboard;
