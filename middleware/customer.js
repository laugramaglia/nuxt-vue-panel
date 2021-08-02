
export default function ({$auth, redirect}){
    const UserRole = $auth
    if(!UserRole.hasScope('customer')) return redirect('/')
}