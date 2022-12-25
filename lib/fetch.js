import { useEffect, useState } from 'react';

export const useFetch = (url, method = 'GET') => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState({ status: null, message: '' });
	const [options, setOptions] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const [success, setSuccess] = useState({ status: null, message: '' });
	const [emptyFields, setEmptyFields] = useState([]);

	const postData = (postData) => {
		setOptions({
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(postData),
		});
	};

	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async (fetchOptions) => {
			setIsPending(true);
			setSuccess({ status: null, message: '' });
			setError({ status: null, message: '' });
			setShowModal(false);

			const res = await fetch(url, {
				...fetchOptions,
				signal: controller.signal,
			});
			const json = await res.json();
			if (!res.ok) {
				if (res.name === 'AbortError') {
					setError({ status: true, message: 'Fetch aborted!' });
				} else {
					setError({ status: true, message: json.message });
					setEmptyFields(json.collection);
				}
				setIsPending(false);
				setData(null);
				setSuccess({ status: false, message: '' });
				setShowModal(true);
			}
			if (res.ok) {
				setIsPending(false);
				setData(json.collection);
				setError({ status: false, message: '' });
				setEmptyFields([]);
				setSuccess({ status: true, message: json.message });
				setShowModal(true);
			}
		};

		if (method === 'GET') {
			fetchData();
		}
		if (method === 'POST' && options) {
			fetchData(options);
		}

		return () => controller.abort();
	}, [url, options, method]);

	useEffect(() => {
		if (!showModal) {
			return;
		}
		const timer = setTimeout(() => {
			setShowModal(false);
		}, 4500);
		return () => {
			clearTimeout(timer);
		};
	}, [showModal]);

	return {
		data,
		isPending,
		error,
		emptyFields,
		success,
		postData,
		showModal,
		setShowModal,
		setError,
	};
};
