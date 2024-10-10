import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import Cross from '@/assets/icons/cross.svg'

export default function ContactMeButton({formOpen, setFormOpen}:{formOpen: boolean, setFormOpen:(open: boolean) => void}) {    

  const handleClick = () =>{
    setFormOpen(!formOpen);
  }

  return (
    <div>
      <button className={`text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl ${formOpen ? 'gap-0' :'gap-1'} w-max border border-gray-950`} onClick={handleClick} aria-expanded={formOpen}>
        {formOpen ? (
          <>
            <span className='font-semibold'>Close</span>
          </>
        ) : (
          <span className='font-semibold'>Contact Me</span>
         )}
        <ArrowUpRightIcon className={`transition-all duration-200 ${formOpen ? 'rotate-45 opacity-0 size-0' : 'opacity-100 size-6'}`}  />
        <Cross className={`transition-all fill-white duration-200 ${formOpen ? 'size-6 pl-2':'opacity-0 size-0'}`}/>
      </button>
    </div>
  )
}
