const Header = ({ name }) => {
    return (
        <>
            <h1>{name}</h1>
        </>
    )
}

const Part = ({ part, exercises }) => {
    return (
        <p>{part} {exercises}</p>
    )
}

const Content = ({ parts }) => {

    return (
        <>
            {parts.map((part) => (
                <Part key={part.id} part={part.name} exercises={part.exercises} />
            ))}

        </>
    )
}

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0)
    return (
        <>
            <h3>Exercises: {totalExercises}</h3>
        </>
    )
}


const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

export default Course