export function loader(){
    return null;
}

export default function TasteComponent(){
    const { state } = useLocation();
    console.log(state);
    const [personState, setPerson] = useState(state);
    return (
        <div></div>
    )
}