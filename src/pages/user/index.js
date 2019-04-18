import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { fetchUser } from '../../utils/gql';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex:"name",
    key: 'name',
  },
  {
    title: 'email',
    dataIndex:"email",
    key: 'email',
  },
  {
    title: 'isAdmin',
    dataIndex:"isAdmin",
    key: 'isAdmin',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <p>Delete</p>
      </span>
    ),
  },
];
class UserIndex extends Component {
 
  render() {
    return (
      <div>
        <Query query={fetchUser}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error : error</p>;

            const userDatas = [];
            data.users.edges.map(item => {
              userDatas.push({
                name: item.node.name,
                email: item.node.email,
                isAdmin: item.node.isAdmin ? '是' : '否',
                key: item.node.rid
              });
              return true
            });

            return (
              <div>
                <Table columns={columns} dataSource={userDatas} />
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default UserIndex;
