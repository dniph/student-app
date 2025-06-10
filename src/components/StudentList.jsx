import './StudentList.css';

import Student from './Student';

const StudentList = () => {
    return (
        <section>
            <h2>Student List</h2>
            <ul>
                <li><Student name="Ada" email="ada@dev.org"></Student></li>
                <li><Student name="Soo-ah" email="sooah@dev.org"></Student></li>
                <li><Student name="Chrissy" email="chrissy@dev.org"></Student></li>
            </ul>
        </section>
    )
}

export default StudentList;