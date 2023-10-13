import{Actions} from "./App"

export default function OperationButton({dispatch,operation})
{
    return(
        <button 
            onClick={()=>
                dispatch({ type: Actions.Choose_operations,payload: {operation}})
            }
        >
            {operation}
        </button>
    )
}