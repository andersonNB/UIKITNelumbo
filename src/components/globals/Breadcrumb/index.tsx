import { HomeOutlined } from '@ant-design/icons'
import { Breadcrumb, Tooltip } from 'antd'
import { AnyObject } from 'antd/es/_util/type'
import { BreadcrumbItemType } from 'antd/lib/breadcrumb/Breadcrumb'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
type BreadCrumbProps = {
    items: Array<{
        path: string
        title: string
        children?: Array<{ path: string; title: string }>
    }>
}
export const BreadcrumbComponent = ({ ...props }: BreadCrumbProps) => {
    const { items } = props
    const { t } = useTranslation('translation')
    const itemRender = (
        route: BreadcrumbItemType,
        _params: AnyObject,
        routes: Array<BreadcrumbItemType>,
        paths: Array<string>
    ) => {
        const last = routes.indexOf(route) === routes.length - 1
        // console.log(last)
        if (route.title === 'home')
            return (
                <Link href={`/${paths.join('/')}`}>
                    <Tooltip title={t('icons.goHome')}>
                        <HomeOutlined rev={undefined} />
                    </Tooltip>
                </Link>
            )
        if (last) return <span>{route.title}</span>
        return <Link href={`/${paths.join('/')}`}>{route.title}</Link>
    }
    return (
        <Breadcrumb
            itemRender={itemRender}
            items={items}
            style={{ marginBottom: '1rem' }}
        />
    )
}