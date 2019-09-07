import React from 'react'
import Square from '../Square/square'

export default class Board extends React.Component {
  render() {
    return (
        <div className="Board">
            <div className="Board__row">
                <Square className="Board__square Board__square--top-left" />
                <Square className="Board__square Board__square--top-middle" />
                <Square className="Board__square Board__square--top-right" />
            </div>
            <div className="Board__row">
              <Square  className="Board__square Board__square--middle-left" />
              <Square  className="Board__square Board__square--middle-middle" />
              <Square  className="Board__square Board__square--middle-right"/>
            </div>
            <div className="Board__row">
                <Square className="Board__square Board__square--bottom-left" />
                <Square className="Board__square Board__square--bottom-middle" />
                <Square  className="Board__square Board__square--bottom-right" />
            </div>
        </div>

    );

}
}