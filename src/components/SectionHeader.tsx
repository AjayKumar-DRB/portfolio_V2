const SectionHeader = ({title, eyebrow, description}:{title:String, eyebrow:String, description:String}) => { 
    return(
        <>
            <div className="flex justify-center">
              <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">{eyebrow}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{title}</h2>
            <p className="text-center text-white/60 md:text-lg lg:text-xl max-w-md mx-auto mt-4">{description}</p>
        </>
    )
}

export default SectionHeader