import { faCircleCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './styles.css'

type SuccessModalProps = {
    header: string,
    message: string,
    handleButtonClick: () => void
}

const SuccessModal = ({header, message, handleButtonClick}: SuccessModalProps) => {
  return (
    <div className='fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center z-50'>
        <div className='relative flex flex-col px-6 py-4 bg-white w-11/12 sm:w-4/5 md:w-1/2 h-auto gap-10 rounded-md shadow-inner shadow-lg'>
            <FontAwesomeIcon
             icon={faCircleCheck}
             className='absolute border-2 bg-white rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[100px] text-lime-600 border-lime-600'/>

            <div className='flex flex-col gap-3 w-full items-center mt-14'>
                <h1 className='success-hdr'>{header}</h1>
                <p className='success-txt'>{message}</p>
            </div>

            <button
             className='w-3/5 h-10 text-white font-bold font-sans self-center rounded-md bg-lime-600'
             onClick={handleButtonClick}>Ok</button>
        </div>
    </div>
  )
}

export default SuccessModal