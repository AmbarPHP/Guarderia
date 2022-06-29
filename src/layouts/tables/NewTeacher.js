
import TeacherForm from "./TeacherForm";
import "./NewTeacher.css";




const  NewTeacher= (props)=>{

   

    const saveTeacherDataHandler=(enteredTeacherData)=>{
        const teacherData={
            ...enteredTeacherData,
             id:Math.random().toString()
        };
        //console.log(teacherData);
        props.onAddTeacher(teacherData);
    }



    return (
        //use the function inside the child component

        
        <div className="new-teacher">
            <TeacherForm saveTeacherData={saveTeacherDataHandler}></TeacherForm>
        </div>
     
    );
}

export default NewTeacher;