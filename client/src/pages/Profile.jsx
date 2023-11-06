import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from "../firebase";
export default function Profile() {
  const fileRef = useRef(null);
  const {currentUser} = useSelector((state) => state.user);
  const [ file, setFile ] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  console.log(filePerc);
  console.log(file);

  // Firebase storage
  // allow read;
  //     allow write: if
  //     request.resources.size < 2 * 1024 * 1024 &&
  //     request.resources.contentType.matches('images/.*')

  useEffect(() => {
    if(file) {
      handleFileUpload(file);
    }
  }, [file]);

  const handleFileUpload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      });
      (error) => {
        setFileUploadError(true);
      }  
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1> 
      <form className="flex flex-col gap-4">
        <input 
          onChange={(e)=>setFile(e.target.files[0])} 
          type="file" 
          ref={fileRef} 
          hidden accept="image/*" 
        />
        <img 
          onClick={()=>fileRef.current.click()} 
          src={currentUser.avatar} 
          alt="profile" 
          className="rounded-full h-26 w-26 object-cover cursor-pointer self-center mt-2" 
        />
        <input 
          type="text" 
          placeholder="username" 
          id="username" 
          className="border p-3 rounded-lg" 
        />
        <input 
          type="email" 
          placeholder="email" 
          id="email" 
          className="border p-3 rounded-lg" 
        />
        <input 
          type="text" 
          placeholder="password" 
          id="password" 
          className="border p-3 rounded-lg" 
        />
        <button 
          className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80 disabled:opacity-65">
            update
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span className="text-red-700 cursor-pointer border p-3 rounded-lg">Delete Account</span>
        <span className="text-red-700 cursor-pointer border p-3 rounded-lg">Sign Out</span>
      </div>
    </div>
  )
};
