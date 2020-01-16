import api from './baseAjax.js'
const mockUrl = '' //测试接口
import { mapDataServer,ioc_yxjc_url,ioc_fzjc_url } from '../config'
const header = {}

/* 当日客流量 */
// 所有景区名称和编码
export const getPassengerFlowCountByCode = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getPassengerFlowCountByCode',params,header);
// 所有景区名称和编码
export const getScenicName = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/scenic/getScenicName',params,header);
// 一、当日景区客流量情况
export const getPassengerFlowTimeSlot = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/passengerFlow/getPassengerFlowTimeSlot',params,header);
// 二、购票方式分析
export const getBuyTypeByAnalyse = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/passengerFlow/getBuyTypeByAnalyse',params,header);
// 三、各景区客流量对比（总体只显前5）
export const getPassengerFlow = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/passengerFlow/getPassengerFlow',params,header);
// 四、景区信息
export const getPassengerFlowTickets = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/passengerFlow/getPassengerFlowTickets',params,header);
// 五、游客停留时长统计
export const getNumberInOutTimeSlot = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/passengerFlow/getNumberInOutTimeSlot',params,header);
// 六、游客流入分析
export const getInFlowTimeSlot = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/passengerFlow/getInFlowTimeSlot',params,header);
// 七、游客流出分析
export const getOutFlowTimeSlot = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/passengerFlow/getOutFlowTimeSlot',params,header);

/* 游客分析 */
// 八、景区游客总流量统计
export const getPassengerFlowTotal = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getPassengerFlowTotal',params,header);
// 九、各景区游客流量环比趋势
export const getPassengerFlowEach = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getPassengerFlowEach',params,header);
// 十、各主要景区客流量占比
export const getTDPassengerFlow = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getPassengerFlow',params,header);
// 十一、游客到访频次统计
export const getTouristsFrequency = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getTouristsFrequency',params,header);
// 十一、游客到访频次统计
export const getPassengerFlowWeek = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getPassengerFlowWeek',params,header);
// 十二、游客来源情况统计
export const getTouristsSource = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getTouristsSource',params,header);
// 十三、本年重要节假日游客流量情况
export const getHolidayPassengerFlow = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getHolidayPassengerFlow',params,header);
// 十五、消费能力
export const getTouristAttribution = params => api.get(ioc_yxjc_url+ mockUrl + 'ioc/portal/lvyou/touristDistribution/getTouristAttribution',params,header);