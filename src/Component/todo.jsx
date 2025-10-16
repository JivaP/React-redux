import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomer, deleteCustomer, editCustomer } from '../Store/slice/Customerslice'

export default function Todo() {
    const dispatch = useDispatch()

    const [view, setView] = useState(false)
    const [name, setName] = useState("")
    const custermerlist = useSelector((state) => state.customer)
    const [editIndex, setEditIndex] = useState(null);

    console.log(editIndex, "editIndex")
    const submitHandler = (e) => {
        e.preventDefault();
        if (name) {
            dispatch(addCustomer(name))
            setView(true)
            setName("")
        }
    }
    const Deletehander = (index) => {
        dispatch(deleteCustomer(index))
    }
    const EditHandler = (index) => {
        setName(custermerlist[index])
        setEditIndex(index)
    }
    const updateHandler = () => {
        if (name !== "" && editIndex !== null) {
            dispatch(editCustomer({ index: editIndex, name }))
            setName("")
            setEditIndex(null)
        }
    }


    return (
        <>

            <div style={{ textAlign: "center" }}>
                <h1>Customer Management</h1>
                <div>

                    <input type="text" value={name} placeholder='Enter Customer Name' onChange={(e) => setName(e.target.value)} />
                </div>
                <button onClick={editIndex ? updateHandler : submitHandler}>{editIndex ? "update" : "Add"} </button>

            </div>
            {
                view ? <div style={{ textAlign: "center" }}>
                    <h2>Customer List</h2>
                    {custermerlist.map((cust, index) => (
                        <>
                            <p key={index}>{cust}</p>
                            <button onClick={() => Deletehander(index)}>delete</button>
                            <button onClick={() => EditHandler(index)}>edit</button>
                        </>
                    ))}
                </div> : null
            }
        </>
    )
}

// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { addCustomer, deleteCustomer, editCustomer } from '../Store/slice/Customerslice'

// export default function Todo() {
//     const dispatch = useDispatch()
//     const [name, setName] = useState("")
//     const [editIndex, setEditIndex] = useState(null)
//     const custermerlist = useSelector((state) => state.customer)

//     const submitHandler = (e) => {
//         e.preventDefault();
//         if (name) {
//             dispatch(addCustomer(name))
//             setName("")
//         }
//     }

//     const updateHandler = () => {
//         if (name !== "" && editIndex !== null) {
//             dispatch(editCustomer({ index: editIndex, name }))
//             setName("")
//             setEditIndex(null)
//         }
//     }

//     const Deletehander = (index) => {
//         dispatch(deleteCustomer(index))
//         if (editIndex === index) {
//             setEditIndex(null)
//             setName("")
//         }
//     }

//     const EditHandler = (index) => {
//         setName(custermerlist[index])
//         setEditIndex(index)
//     }

//     return (
//         <div style={{ textAlign: "center" }}>
//             <h1>Customer Management</h1>
//             <div>
//                 <input
//                     type="text"
//                     value={name}
//                     placeholder='Enter Customer Name'
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <button onClick={editIndex !== null ? updateHandler : submitHandler}>
//                     {editIndex !== null ? "Update" : "Add"}
//                 </button>
//             </div>

//             {custermerlist.length > 0 && (
//                 <div style={{ textAlign: "center", marginTop: "20px" }}>
//                     <h2>Customer List</h2>
//                     {custermerlist.map((cust, index) => (
//                         <div key={index}>
//                             <span>{cust}</span>
//                             <button onClick={() => Deletehander(index)}>Delete</button>
//                             <button onClick={() => EditHandler(index)}>Edit</button>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     )
// }
