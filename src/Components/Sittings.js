import Siting from "./Siting"

const Sittings = ({ sitingList }) => {
    return (
        <>
            {
                sitingList.map((sitingList) => (
                    <Siting key={sitingList.id} sitingList={sitingList} />
                ))
            }
        </>
    )
}

export default Sittings