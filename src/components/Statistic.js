import React, { Component } from 'react';
import { Statistic, Card, Row, Col } from 'antd';

class Statistics extends Component {

    render() {
        const displayStatistic = this.props.statistic ? this.props.statistic.map((item, index) => (
            <Col span={24} key={index} style={{marginBottom: "32px"}}>
                <Card className="statistic" style={{border: "1.3px solid black", borderRadius: "4px"}}>
                <Statistic
                    style={{fontWeight: "500"}}
                    title={item.title}
                    value={item.value}
                    valueStyle={{ color: 'black' }}
                />
                </Card>
            </Col>
            )
        ) : "Nothing"
        return (
            <Col span={6}>
                {displayStatistic}
            </Col>
                
        );
    }
}

export default Statistics;
