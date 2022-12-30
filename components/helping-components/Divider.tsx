import { DividerProps } from "../../domain/domain";

export default function Divider (props: DividerProps) {
    return <>
        <div className="dividerContainer" id={props.id}>
            <div className="dividerLine"></div>
        </div>
    </>
}