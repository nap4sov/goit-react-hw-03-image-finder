import { Puff } from  'react-loader-spinner'

const Loader = () => 
    <div className="loader">
        <Puff
            height="100"
            width="100"
            color='grey'
            ariaLabel='loading'
        />
    </div>

export default Loader