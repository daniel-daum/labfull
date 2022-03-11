import React from "react"
import react from "react"
import "./block.css"

type blockProps = {
    block_text?:string,
    block_number?:number,
    block_stats?:React.ReactNode
    block_stats_text?:string,
    block_icon?:React.ReactNode,
    block_icon_color?:string,
    
}

function Block(props:blockProps) {
    return (
        <div className="block">

            <div className="block-left">

                <div className="block-text">{props.block_text}</div>
                <div className="block-number">{props.block_number}</div>
                <div className="block-info">
                    <div className="block-stats">{props.block_stats}</div>
                    <div className="block-stats-text">{props.block_stats_text}</div>
                </div>
            </div>

            <div className="block-right">

                <div className={props.block_icon_color} >
                    <div className="block-icon">{props.block_icon}</div>

                </div>

            </div>

        </div>
    )
}

export default Block;