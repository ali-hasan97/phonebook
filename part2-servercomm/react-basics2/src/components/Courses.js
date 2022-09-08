const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
};

const Content = ({ parts }) => {
    return (
        <div>
        {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
        </div>
    )
};

const Total = ({ parts }) => {
    const sum = parts.reduce((acc, obj) => {
        return acc + obj.exercises
    }, 0)
    return (
        <strong>Total of {sum} exercises</strong>
    )
};

const Course = ({ course }) => {
    return (
        <div>
          <Header course={course.name} />
          <Content parts={course.parts}/>
          <Total parts={course.parts}/>
        </div>
      )
}

const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map((course) => <Course key={course.id} course={course} />)}
        </div>
    )
}

export default Courses