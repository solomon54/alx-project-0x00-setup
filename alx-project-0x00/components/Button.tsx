const Button:React.FC<ButtonProps>=({size,shape})=>{
return(
    <button className={` ${size==="large"?"px-6 py-3 text-lg":"px-3 py-1 text-sm"} ${shape==="rounded"?"rounded-full":"rounded-md"} bg-blue-500 text-white font-semibold`}>{size}</button>

)
}
export default Button;