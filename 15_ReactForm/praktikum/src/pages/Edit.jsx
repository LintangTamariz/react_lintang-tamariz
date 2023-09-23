import React, {useState, useEffect} from 'react'

const Edit = ({ productData, onSave }) => {
        const [editedData, setEditedData] = useState(productData);
      
        // Update editedData whenever productData changes
        useEffect(() => {
          setEditedData(productData);
        }, [productData]);
      
        const handleInputChange = (e) => {
          const { name, value } = e.target;
          setEditedData({
            ...editedData,
            [name]: value,
          });
        };
      
        const handleSave = () => {
          // Call the onSave function to save the edited data
          onSave(editedData);
        };
    }      
  return (
    <div>
       <button onClick={handleSave}>Save</button>
    </div>
  )

export default Edit
