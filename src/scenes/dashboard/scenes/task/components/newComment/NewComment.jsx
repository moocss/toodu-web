import PropTypes from "prop-types";
import React, { Component } from "react";
import Form from "../../../../../../components/form/Form";
import commentApi from "../../../../../../core/comments/commentsApi";

export default class NewComment extends Component {
  static propTypes = {
    taskId: PropTypes.string.isRequired
  };

  createComment({ content }) {
    return commentApi.create({ content, task_id: this.props.taskId });
  }

  render() {
    return (
      <Form
        submitText="Send"
        onSubmit={this.createComment.bind(this)}
        fields={[
          {
            name: "content",
            type: "textarea",
            label: "post a new comment"
          }
        ]}
      />
    );
  }
}
