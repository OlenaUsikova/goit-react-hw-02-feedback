export const Button = ({text}) => {
    return (
        <button 
        style={
            {boxShadow: "5px 5px 3px 2p",
  border: "1px solid",
  borderRadius: 5,}
        }
        type="button">{text}</button>
    
    )
}