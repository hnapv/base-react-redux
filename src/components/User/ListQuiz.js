import { useEffect, useState } from "react"
import { getQuizByUser } from "../../services/apiServices"
import "./ListQuiz.scss"
import { useNavigate } from "react-router-dom"

const ListQuiz = (props) => {
    const [arrQuiz, setArrQuiz] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getQuizData()
    }, [])

    const getQuizData = async () => {
        const data = await getQuizByUser()
        console.log(data)
        if (data && data.EC === 0) {
            setArrQuiz(data.DT)
            console.log("arrQuiz==>>", arrQuiz)
        }
    }

    return (
        <div className="list-quiz-container container">
            {arrQuiz && arrQuiz.length > 0 &&
                arrQuiz.map((quiz, index) => {
                    return (
                        <div key={`${index}-quiz`} className="card" style={{ width: "18rem" }}>
                            <img className="card-img-top" src={`data:image/jpeg;base64,${quiz.image}`} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">Quiz {index + 1}</h5>
                                <p className="card-text">{quiz.description}</p>
                                <button 
                                className="btn btn-primary"
                                onClick={()=>navigate(`/quiz/${quiz.id}`)}
                                >Start Now</button>
                            </div>
                        </div>
                    )
                })}
            {arrQuiz && arrQuiz.length === 0 &&
                <div>You don't have any quiz now...</div>
            }
        </div>
    )
}
export default ListQuiz