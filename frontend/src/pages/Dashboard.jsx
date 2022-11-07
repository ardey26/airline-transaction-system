import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import GoalForm from '../components/GoalForm'
import GoalItem from '../components/GoalItem'
import Spinner from '../components/Spinner'
import { getGoals, reset } from '../features/goals/goalSlice'


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getGoals())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }



  return (
    // <>
    //   <section classNameName='heading'>
    //     <h1>Welcome {user && user.name}</h1>
    //     <p>Goals Dashboard</p>
    //   </section>

    //   <GoalForm />

    //   <section classNameName='content'>
    //     {goals.length > 0 ? (
    //       <div classNameName='goals'>
    //         {goals.map((goal) => (
    //           <GoalItem key={goal._id} goal={goal} />
    //         ))}
    //       </div>
    //     ) : (
    //       <h3>You have not set any goals</h3>
    //     )}
    //   </section>
  <div>
      <div className="card" style={{height: '60vh'}}>
  <div className="card-body">
    <h5 className="card-title">Quote</h5>
    <p className="card-text">Quote Author</p>
    <button type="button" className="btn btn-primary" onClick={() => navigate('/book')}>BOOK NOW!</button>
  </div>
</div>
    </div>
  )
}

export default Dashboard
