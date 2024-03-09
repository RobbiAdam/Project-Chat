import React from 'react'

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
        <div className='flex items-center justify-center'>
            <div className="form-control">
            <label className={`gap-2 cursor-pointer label ${selectedGender === "male" ? "selected" : ""}`}>
                    <span className="label-text">Male</span>
                    <input type="checkbox"  className="checkbox checkbox-success"
                    checked={selectedGender === 'male'}
                    onChange={() => onCheckboxChange("male") } />
                </label>
            </div>
            <div className="form-control">
                <label className={`gap-2 cursor-pointer label ${selectedGender === "female" ? "selected" : ""} `}>
                    <span className="label-text">Female</span>
                    <input type="checkbox"  className="checkbox checkbox-success"
                    checked={selectedGender === 'female'}
                    onChange={() => onCheckboxChange("female")} />
                </label>
            </div>
        </div>
    )
}

export default GenderCheckbox


// import React from 'react'

// const GenderCheckbox = () => {
//     return (
//         <div className='flex items-center justify-center'>
//             <div className="form-control">
//                 <label className="gap-2 cursor-pointer label">
//                     <span className="label-text">Male</span>
//                     <input type="checkbox"  className="checkbox checkbox-success" />
//                 </label>
//             </div>
//             <div className="form-control">
//                 <label className="gap-2 cursor-pointer label">
//                     <span className="label-text">Female</span>
//                     <input type="checkbox"  className="checkbox checkbox-success" />
//                 </label>
//             </div>
//         </div>
//     )
// }

// export default GenderCheckbox