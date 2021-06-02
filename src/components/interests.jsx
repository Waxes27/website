import React, { Component } from 'react'

export default class interests extends Component {
    render() {
        return (
            <div className="overallInterests">
                <h1>Interests</h1>
                <table >
                    <div className="interestDiv">
                        <tr>
                            <th>Work</th>
                            <th>Spare time</th>
                        </tr>
                        <tr >
                            <td className="firstRow">CyberSecurity</td>
                            <td className="firstRow">Gaming</td>
                        </tr>
                        <tr>
                            <td>CyberSecurity</td>
                            <td>Gaming</td>
                        </tr>
                        <tr>
                            <td>CyberSecurity</td>
                            <td>Gaming</td>
                        </tr>
                        
                    </div>
                    
                </table>
            </div>
        )
    }
}
