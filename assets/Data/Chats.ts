export default {
	id: '1',
	users: [{
		id: 'u1',
		name: 'Rayhan',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
	}, {
		id: 'u2',
		name: 'Shorif',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/2.jpg',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Shorif!',
		createdAt: '2021-03-21T07:48:00.000Z',
		user: {
			id: 'u1',
			name: 'Rayhan',
		},
	}, {
		id: 'm2',
		content: 'I am good',
		createdAt: '2021-03-21T07:42:00.000Z',
		user: {
			id: 'u2',
			name: 'Shorif',
		},
	}, {
		id: 'm3',
		content: 'What about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Shorif',
		},
	}, {
		id: 'm4',
		content: 'Good as well, preparing for the study now.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u1',
			name: 'Rayhan',
		},
	}, {
		id: 'm5',
		content: 'How was about your day?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u1',
			name: 'Rayhan',
		},
	}, {
		id: 'm6',
		content: 'Really Nice.and yours? Did you enjoy it?',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Shorif',
		},
	}, {
		id: 'm7',
		content: 'Yes, But I am so tired.',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u1',
			name: 'Rayhan',
		},
	}]
}

