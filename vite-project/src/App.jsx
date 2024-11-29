import React, { useState } from "react";

const PatientRegistrationForm = () => {
  const [fullName, setFullName] = useState("");
  const [passport, setPassport] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const [repeatVisit, setRepeatVisit] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("Kart qeydiyyatdan keçdi!");

    console.log("Xəstənin Tam Adı: ", fullName);
    console.log("Seriya və Pasport Nömrəsi: ", passport);
    console.log("Cinsiyyət: ", gender);
    console.log("Yaş: ", age);
    console.log("E-mail: ", email);
    console.log("Telefon Nömrəsi: ", phone);
    console.log("Simptomların Təsviri: ", symptoms);
    console.log("Təkrar Qəbul: ", repeatVisit ? "Bəli" : "Xeyr");
  };

  return (
    <div>
      <h1>Xəstə Qeydiyyat Formu</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Xəstənin Tam Adı:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Seriya və Pasport Nömrəsi:</label>
          <input
            type="text"
            value={passport}
            onChange={(e) => setPassport(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Cinsiyyət:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Seçin</option>
            <option value="Kişi">Kişi</option>
            <option value="Qadın">Qadın</option>
          </select>
        </div>
        <div>
          <label>Yaş:</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Telefon Nömrəsi:</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Simptomların Təsviri:</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            required
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={repeatVisit}
              onChange={(e) => setRepeatVisit(e.target.checked)}
            />
            Təkrar qəbul
          </label>
        </div>
        <button type="submit">Göndər</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default PatientRegistrationForm;
