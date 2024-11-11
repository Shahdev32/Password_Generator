import React, { useState } from 'react';
import ReactSwitch from 'react-switch';

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUpperCase, setIncludeUpperCase] = useState(true);
  const [includeLowerCase, setIncludeLowerCase] = useState(true);
  const [includeNumber, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setSpecialChars] = useState(true);

  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "123456789";
    const specialChars = "!@#$%^&*()";

    let validChars = "";
    if (includeLowerCase) validChars += lowerCaseChars;
    if (includeUpperCase) validChars += upperCaseChars;
    if (includeNumber) validChars += numbers;
    if (includeSpecialChars) validChars += specialChars;

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars.charAt(randomIndex);
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-200 to-purple-400">
      <div className="bg-white shadow-lg rounded-lg p-8 w-[350px] text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Password Generator</h2>
        
        <div className="mb-4">
          <label className="font-semibold text-gray-600">Password Length:</label>
          <input
            className="w-16 bg-purple-100 text-center text-gray-800 font-bold ml-2 rounded-md p-1"
            type="number"
            min="4"
            max="20"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-700">Include Uppercase</label>
          <ReactSwitch
            checked={includeUpperCase}
            onChange={() => setIncludeUpperCase(!includeUpperCase)}
            height={20}
            width={40}
            handleDiameter={18}
            onColor="#6b46c1"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-700">Include Lowercase</label>
          <ReactSwitch
            checked={includeLowerCase}
            onChange={() => setIncludeLowerCase(!includeLowerCase)}
            height={20}
            width={40}
            handleDiameter={18}
            onColor="#6b46c1"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <label className="text-gray-700">Include Numbers</label>
          <ReactSwitch
            checked={includeNumber}
            onChange={() => setIncludeNumbers(!includeNumber)}
            height={20}
            width={40}
            handleDiameter={18}
            onColor="#6b46c1"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <label className="text-gray-700">Include Special Characters</label>
          <ReactSwitch
            checked={includeSpecialChars}
            onChange={() => setSpecialChars(!includeSpecialChars)}
            height={20}
            width={40}
            handleDiameter={18}
            onColor="#6b46c1"
          />
        </div>

        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 px-4 py-2 rounded-md text-white font-semibold shadow-lg"
          onClick={generatePassword}
        >
          Generate Password
        </button>

        {password && (
          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-800">Generated Password:</p>
            <div className="bg-gray-200 text-gray-800 p-2 rounded-md font-mono text-lg tracking-wide mt-2 shadow-inner">
              {password}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
