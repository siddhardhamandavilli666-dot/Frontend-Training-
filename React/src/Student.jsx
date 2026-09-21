import React from "react";
const Student = React.memo(function Student({
    student,
    onSelect
}) {

    console.log("Student rendered:", student.name);

    return (
        <div className="card p-3 mb-2">

            <h4>{student.name}</h4>

            <p>
                Department: {student.department}
            </p>

            <p>
                CGPA: {student.cgpa}
            </p>

            <button
                onClick={() => onSelect(student)}
                className="btn btn-primary"
            >
                Select
            </button>

        </div>
    );
});
export default Student;
