import React from 'react'
import Square from '../Square/square'

export default class Board extends React.Component {
  render() {
    return (
        <div className="Board">
            <div className="Board__row">
                <div className="Board__square Board__square--top-left"></div>
                <div className="Board__square Board__square--top-middle"></div>
                <div className="Board__square Board__square--top-right"></div>
            </div>
            <div className="Board__row">
                <div className="Board__square Board__square--middle-left"> </div>
                <div className="Board__square Board__square--middle-middle">O</div>
                <div className="Board__square Board__square--middle-right"> </div>
            </div>
            <div className="Board__row">
                <div className="Board__square Board__square--bottom-left"> </div>
                <div className="Board__square Board__square--bottom-middle"> </div>
                <div className="Board__square Board__square--bottom-right">X</div>
            </div>
        </div>

    );

}
}