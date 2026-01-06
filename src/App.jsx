import { useState } from 'react'
import './App.css'

function App() {
  const [languages, setLanguages] = useState([
    'HTML & CSS',
    'JavaScript',
    'React',
    'Angular.js',
    'Node.js'
  ])

  const [Courses, setCourses] = useState([
  {
    imageurl: 'https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png',
    CourseName: 'Javascript',
    price: 18000,
    status: "Available"
  },
  {
    imageurl: 'https://www.mindinventory.com/blog/wp-content/uploads/2023/02/MEAN-stack.webp',
    CourseName: 'MEAN Stack',
    price: 15000,
    status: "Coming Soon"
  },
  {
    imageurl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230926163338/Java-Full-Stack.png',
    CourseName: 'JAVA FULL STACK',
    price: 22000,
    status: "Available"
  },
  {
    imageurl: 'https://media.geeksforgeeks.org/wp-content/uploads/20240415204701/How-to-Become-a-Python-Full-Stack-Developer.png',
    CourseName: 'PYTHON FULL STACK',
    price: 12000,
    status: "Not Available"
  },
])

  const [student, setStudent] = useState({
    profileImg:
      "https://www.clipartkey.com/mpngs/m/198-1988954_staff-profile-photo-facebook-blank-profile-picture-male.png",
    fullName: "",
    className: "",
    academicYear: "",
    dob: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setStudent({ ...student, profileImg: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student data saved!");
  };


  

  return (
    <>
      <div className="container">
        <h1>Programming Languages</h1>
        <div className="flex-container">
          {languages.map((tmp, index) => (
            <p key={index}>{tmp}</p>
          ))}
        </div>
      </div>

      <div className="container1">
        <h2>Courses</h2>
        <div className="card-container">
          {Courses.map((course, index) => (
           <div className="card" key={index}>
           <img src={course.imageurl} alt={course.CourseName} />
           <div className="card-body">
           <h3>{course.CourseName}</h3>

    <p className="price">
      ₹{course.price}
      <span
        className="availability"
        style={{
          backgroundColor:
            course.status === "Available"
              ? "green"
              : course.status === "Not Available"
              ? "red"
              : "orange"
        }}
      >
        {course.status}
      </span>
    </p>
  </div>
</div>
          ))}
        </div>
      </div>

      <div className="container3">
        <div className="title">
          <h2>Student List</h2>
          </div>
          <div className="search-container">
            <input type='text' placeholder='FullName not Found'></input>
          </div>
          <table>
            <thead>
              <th>#</th>
              <th>Roll No</th>
              <th>Full Name</th>
              <th>Department</th>
              <th>CGPA</th>
              <th>Mobile no</th>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>04</td>
              <td>Sanika</td>
              <td>CSE</td>
              <td>9.14</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>1</td>
              <td>04</td>
              <td>Sanika</td>
              <td>CSE</td>
              <td>9.14</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>1</td>
              <td>04</td>
              <td>Sanika</td>
              <td>CSE</td>
              <td>9.14</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>1</td>
              <td>04</td>
              <td>Sanika</td>
              <td>CSE</td>
              <td>9.14</td>
              <td>1234567890</td>
            </tr>
            <tr>
              <td>1</td>
              <td>04</td>
              <td>Sanika</td>
              <td>CSE</td>
              <td>9.14</td>
              <td>1234567890</td>
            </tr>
            </tbody>
          </table>
      </div>

      {/* <div className="container4">
        <div className="form-container">
          <h2>Register Form</h2>
          <div className="info-container">
            <div className="form">
              <label>Full Name</label>
              <input name='fullname' onChange={(e) => handleChange(e)}type='text'></input>
            </div>
             <div className="form">
              <label>Email Address</label>
              <input emailAddress='emailAddress' onChange={(e) => handleChange(e)} type='email'></input>
            </div>
             <div className="form">
              <label>Mobile no</label>
              <input mobileno='mobileno' onChange={(e) => handleChange(e)} type='number'></input>
            </div>
             <div className="form">
              <label>Department</label>
              <select department='department' onChange={(e) => handleChange(e)}>
                <option select value={'Select values'}>SELECT</option>
                <option select value={'CSE'}>CSE</option>
                <option select value={'ENTC'}>ENTC</option>
                <option select value={'MECH'}>MECH</option>
                <option select value={'CIVIL'}>CIVIL</option>
                <option select value={'EEE'}>EEE</option>
              </select>
            </div>
            <button>Register</button>
          </div>
        </div>
          <div className="field">
            <h2>Form Data</h2>
            <div className="field-container">
              <label>Full Name:</label>
            <p>{register.fullname}</p>
            </div>
            <div className="field-container">
              <label>Email Address:</label>
            <p>{register.emailAddress}</p>
            </div>
            <div className="field-container">
              <label>Mobile no:</label>
            <p>{register.mobileno}</p>
            </div>
            <div className="field-container">
              <label>Department:</label>
            <p>{register.department}</p>
            </div>
          </div>
        </div> */}

        <div className="container4">
     
      <div className="form-container">
        <h2>Student Card Form</h2>
        <div className="info-container">
          <form onSubmit={handleSubmit}>
            <div className="form">
              <label>Profile Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>

            <div className="form">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={student.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="form">
              <label>Class</label>
              <input
                type="text"
                name="className"
                value={student.className}
                onChange={handleChange}
              />
            </div>

            <div className="form">
              <label>Academic Year</label>
              <input
                type="number"
                name="academicYear"
                value={student.academicYear}
                onChange={handleChange}
              />
            </div>

            <div className="form">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={student.address}
                onChange={handleChange}
              />
            </div>

            <div className="form">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={student.dob}
                onChange={handleChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="field1">
        <h2>ID Card</h2>
        <img src={student.profileImg} alt="Profile" />
        <div className="field-container">
          <label>Full Name</label>
          <p>{student.fullName || "Demo"}</p>
        </div>
        <div className="field-container">
          <label>Class Name</label>
          <p>{student.className || "Demo"}</p>
        </div>
        <div className="field-container">
          <label>Academic Year</label>
          <p>{student.academicYear || "Demo"}</p>
        </div>
        <div className="field-container">
          <label>DOB</label>
          <p>{student.dob || "Demo"}</p>
        </div>
        <div className="field-container">
          <label>Address</label>
          <p>{student.address || "Demo"}</p>
        </div>
        <div className="footer">SKNSCOE</div>
      </div>
    </div>
        
    </>
  )
}

export default App
