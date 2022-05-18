function Vienas({ skaicius, spalva, klase }) {

    return (
        <>
            {
                skaicius + 1 > 9 ? null : <h2 className={klase} style={{color: spalva}}>{skaicius + 1}</h2>
            }
        </>
    )
}

export default Vienas;