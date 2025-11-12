import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      <Button size="large" shape="rounded-sm", "rounded-lg", "rounded-full"/>
    </div>
  )
}
export default Landing