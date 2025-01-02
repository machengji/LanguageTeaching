<script>
export default {
	onLaunch: function () {
		console.log('App Launch');
		// uni.hideTabBar();
	},
	onShow: function () {
		uni.hideTabBar({
		    animation: true // 是否使用动画隐藏
		  });
		console.log('App Show');
		
	},
	onHide: function () {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uview-plus/index.scss';
// /* #ifndef APP-NVUE */
//  @import 'uni_modules/uni-scss/variables.scss';
// @import '@/static/customicons.css';
// // 设置整个项目的背景色
// page {
// 	background-color: #f5f5f5;
// }

// /* #endif */
// .example-info {
// 	font-size: 14px;
// 	color: #333;
// 	padding: 10px;
// }
</style>
