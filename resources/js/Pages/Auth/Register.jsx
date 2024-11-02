import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'USER',
        profile_pic_url: '',
    });

    const submit = (e) => {
        e.preventDefault();
        
        // Jika field profile_pic_url kosong, gunakan URL default
        if (!data.profile_pic_url) {
            setData('profile_pic_url', 'https://cdn-icons-png.flaticon.com/512/456/456283.png');
        }

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />
                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('email', e.target.value)}
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="role" value="Role" />
                    <select
                        id="role"
                        name="role"
                        value={data.role}
                        className="mt-1 block w-full border-gray-300 rounded-lg"
                        onChange={(e) => setData('role', e.target.value)}
                    >
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                    </select>
                    <InputError message={errors.role} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="profile_pic_url" value="Profile Picture URL" />
                    <TextInput
                        id="profile_pic_url"
                        type="text"
                        name="profile_pic_url"
                        value={data.profile_pic_url}
                        className="mt-1 block w-full"
                        placeholder="Enter URL or leave blank for default"
                        onChange={(e) => setData('profile_pic_url', e.target.value)}
                    />
                    <InputError message={errors.profile_pic_url} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password', e.target.value)}
                    />
                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />
                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="mt-4">
                    <PrimaryButton className="w-full" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
