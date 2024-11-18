/*import React from "react";
import axios from 'axios';

const upload = async (file)=>{
    const data = new FormData();
    data.append("file",file);
    data.append("upload_Preset","Skill-Trade");
    try{
        const res = await axios.post("https://res.cloudinary.com/dl5lzwdqx/image/upload/",data)

    
    const { url } = res.data;
    return url;
    }
    catch(err){
        console.log(err)
    }
}
    export default upload */
    import axios from 'axios';

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "Skill-Trade"); // Ensure the preset name is correct

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dl5lzwdqx/image/upload", data); // Use your cloud name in the URL

    const { secure_url } = res.data; // Use 'secure_url' to get the HTTPS URL
    return secure_url;
  } catch (err) {
    console.error("Error uploading the image:", err);
    throw err; // It might be better to re-throw the error to handle it elsewhere
  }
};

export default upload;
