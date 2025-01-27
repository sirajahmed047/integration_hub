'use client';
import React, { Component } from 'react';
import { API_URL } from '../../components/common-constants.js';
import ApiUtility from '../../components/ApiUtility/ApiUtility';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';

class WebhookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webhooks: [],
            loading: false,
            error: null,
            msg: null,
            showConfirmDialog: false,
            selectedWebhookId: null
        };
        this.apiUtility = new ApiUtility();
    }

    componentDidMount() {
        this.loadWebhooks();
    }

    startLoading = () => {
        this.setState({ loading: true, error: null, msg: null });
    };

    // Enhanced error handling
    handleError = (error) => {
        this.setState({
            error: error.message || 'An error occurred',
            loading: false,
            msg: null
        });
    };

    // Enhanced success callback
    handleSuccess = (response) => {
        this.setState({
            webhooks: response.data,
            loading: false,
            error: null,
            msg: response.msg || 'Operation successful'
        });
    };

    loadWebhooks = () => {
        this.apiUtility.postRequest(
            '/api/webhook/load',
            this.startLoading,
            this.handleError,
            this.handleSuccess,
            {}
        );
    };

    // Add confirmation dialog
    handleDeleteClick = (id) => {
        this.setState({
            showConfirmDialog: true,
            selectedWebhookId: id
        });
    };

    handleConfirmDelete = () => {
        const { selectedWebhookId } = this.state;
        if (selectedWebhookId) {
            this.apiUtility.postRequest(
                '/api/webhook/delete',
                this.startLoading,
                this.handleError,
                this.handleSuccess,
                { id: selectedWebhookId }
            );
        }
        this.setState({ showConfirmDialog: false, selectedWebhookId: null });
    };

    handleCancelDelete = () => {
        this.setState({ showConfirmDialog: false, selectedWebhookId: null });
    };

    handleTestConnection = async (webhookConfig) => {
        try {
            this.startLoading();
            const response = await this.apiUtility.testConnection(
                webhookConfig.url,
                webhookConfig.method,
                webhookConfig.headers
            );
            this.handleSuccess(response);
        } catch (error) {
            this.handleError(error);
        }
    };

    render() {
        const { webhooks, loading, error, msg, showConfirmDialog } = this.state;

        return (
            <div className="webhook-page">
                <ErrorHandler 
                    error={error} 
                    onDismiss={() => this.setState({ error: null })} 
                />
                
                {msg && <div className="success-message">{msg}</div>}
                
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className="webhooks-list">
                        {webhooks.map(webhook => (
                            <div key={webhook.id} className="webhook-item">
                                <h3>{webhook.name}</h3>
                                <p>{webhook.url}</p>
                                <button onClick={() => this.handleDeleteClick(webhook.id)}>
                                    Delete
                                </button>
                                <button onClick={() => this.handleTestConnection(webhook)}>
                                    Test Connection
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {showConfirmDialog && (
                    <div className="confirm-dialog">
                        <p>Are you sure you want to delete this webhook?</p>
                        <button onClick={this.handleConfirmDelete}>Yes</button>
                        <button onClick={this.handleCancelDelete}>No</button>
                    </div>
                )}
            </div>
        );
    }
}