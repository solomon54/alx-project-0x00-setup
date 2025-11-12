import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      {/* Small Buttons */}
      <div className="flex gap-3">
        <Button title="Small - sm" styles="text-sm rounded-sm px-3 py-1" />
        <Button title="Small - lg" styles="text-sm rounded-lg px-3 py-1" />
        <Button title="Small - full" styles="text-sm rounded-full px-3 py-1" />
      </div>

      {/* Medium Buttons */}
      <div className="flex gap-3">
        <Button title="Medium - sm" styles="text-base rounded-sm px-4 py-2" />
        <Button title="Medium - lg" styles="text-base rounded-lg px-4 py-2" />
        <Button title="Medium - full" styles="text-base rounded-full px-4 py-2" />
      </div>

      {/* Large Buttons */}
      <div className="flex gap-3">
        <Button title="Large - sm" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large - lg" styles="text-lg rounded-lg px-6 py-3" />
        <Button title="Large - full" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
  )
}
export default Landing