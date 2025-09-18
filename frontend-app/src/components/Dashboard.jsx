import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const backendURL = 'https://project-full-stack-developer-backend.onrender.com/api/tasks'; // เปลี่ยนเป็น URL จริงของคุณ
  const backendURL = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios.get(backendURL)
      .then(res => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('ไม่สามารถโหลดข้อมูลได้');
        setLoading(false);
      });
  }, []);

  const addTask = (title) => {
    axios.post(backendURL, { title })
      .then(res => setTasks([...tasks, res.data]))
      .catch(err => console.error(err));
  };

  const toggleTask = (id, completed) => {
    axios.put(`${backendURL}/${id
