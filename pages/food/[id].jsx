const Food = ({ food: { food } }) => {
  return (
    <div className="p-8">
      <h2 className="text-5xl text-red-600">{food.name}</h2>
    </div>
  )
}

export default Food

export const getServerSideProps = async (context) => {
  const id = context.params.id
  const response = await fetch(`http://localhost:3000/api/food/${id}`)
  const food = await response.json()
  return {
    props: {
      food,
    },
  }
}
