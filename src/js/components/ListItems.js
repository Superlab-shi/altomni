import React from "react";
import { Link } from "react-router";


class ListItems extends React.Component {
    render() { console.log(this.props.sampleData);
        const listItem = Object.keys(this.props.sampleData).map((id) => {
            const d = this.props.sampleData[id];
            const photo_path = 'photos/' + d.photo;console.log(photo_path);
            return (
                <div key={id} className="peopleList mb-5">
                    <img src={photo_path} className="img-fluid image" alt="Responsive image" />
                    <div className="peopleItem">
                        <h3><Link to={'/people_detail/' + id} activeClassName="test">{d.firstName + " " + d.lastName}</Link></h3>
                        <h4>{d.title}</h4>
                        <h4>{d.currentLocation}</h4>
                    </div>
                </div>)
        });
        return (
            <div>{listItem}</div>
        )
    }
}
module.exports = ListItems;