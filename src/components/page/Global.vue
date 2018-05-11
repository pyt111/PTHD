<template>
	<div class="global" >
		<!--简短信息提示-->
		<div v-if="noticeSwitch" class="notice-wrap" :style="fullWidthStyle">
			<span class="notice animated fadeIn">{{notice.config.msg}}</span>
		</div>
		<!--带图标的操作结果提示-->
		<div v-if="feedbackSwitch" class="feedback-wrap" :style="fullWidthStyle">
			<div v-if="feedback.config.type === 'ok'" class="feedback-content animated fadeIn">
				<svg class="iconfont feedback-icon"  aria-hidden="true" style="color: #1afa29">
				    <use xlink:href="#icon-ok"></use>
				</svg>
				<span class="feedback-msg">{{feedback.config.msg}}</span>
			</div>
			<div v-if="feedback.config.type === 'error'" class="feedback-content animated fadeIn">
				<svg class="iconfont feedback-icon"  aria-hidden="true" style="color: #fa4353">
				    <use xlink:href="#icon-error"></use>
				</svg>
				<span class="feedback-msg">{{feedback.config.msg}}</span>
			</div>
			<div v-if="feedback.config.type === 'waring'" class="feedback-content animated fadeIn">
				<svg class="iconfont feedback-icon"  aria-hidden="true" style="color: #f1884a">
				    <use xlink:href="#icon-waring"></use>
				</svg>
				<span class="feedback-msg">{{feedback.config.msg}}</span>
			</div>
		</div>
		<!--全局加载中-->
		<div v-if="loading" class="loading animated fadeIn" :style="fullScreenStyle">
			 <mu-circular-progress class="loading-circle" :size="120" color="#fff"/>
		</div>
		<!--简单对话框-->
		<mu-dialog :open="simpleDialogSwitch" :title="simpleDialog.config.title">
			{{simpleDialog.config.content}}
		    <mu-flat-button label="确定" slot="actions" primary @click="simpleDialog.config.onOk();simpleDialogClose()"/>
		</mu-dialog>
		<!--询问对话框-->
		<mu-dialog :open="confirmDialogSwitch" :title="confirmDialog.config.title">
	    	{{confirmDialog.config.content}}
	    	<mu-flat-button slot="actions" @click="confirmDialog.config.onCancel();confirmDialogClose()" primary label="取消"/>
	    	<mu-flat-button slot="actions" primary @click="confirmDialog.config.onOk();confirmDialogClose()" label="确定"/>
	    </mu-dialog>
	</div>
</template>

<script>
import {notice, feedback, simpleDialog, confirmDialog} from '@/tools/talk'
import {fullScreenStyle, fullWidthStyle} from '@/config/style'
export default {
	data () {
		return {
		  fullScreenStyle: fullScreenStyle,
		  fullWidthStyle: fullWidthStyle,
		  noticeSwitch: false,
		  noticeClock: null,
		  feedbackSwitch: false,
		  feedbackClock: null,
		  simpleDialogSwitch: false,
		  confirmDialogSwitch: false
		}
	},
	computed: {
		notice () {
			return this.$store.state.notice
		},
		noticeState () {
			return this.$store.state.notice.state
		},
		feedback () {
			return this.$store.state.feedback
		},
		feedbackState () {
			return this.$store.state.feedback.state
		},
		loading () {
			return this.$store.state.loading
		},
		simpleDialog () {
			return this.$store.state.simpleDialog
		},
		simpleDialogState () {
			return this.$store.state.simpleDialog.state
		},
		confirmDialog () {
			return this.$store.state.confirmDialog
		},
		confirmDialogState () {
			return this.$store.state.confirmDialog.state
		},
	},
	watch: {
		noticeState: function () {
			this.noticeSwitch = false
			if (this.noticeClock) {
				clearTimeout(this.noticeClock)
			}
			this.noticeSwitch = true
			let delay = this.notice.config.delay
			let vm = this
			setTimeout(function () {
				vm.noticeSwitch = false
			}, delay)
		},
		feedbackState: function () {
			this.feedbackSwitch = false
			if (this.feedbackClock) {
				clearTimeout(this.feedbackClock)
			}
			this.feedbackSwitch = true
			let delay = this.feedback.config.delay
			let vm = this
			setTimeout(function () {
				vm.feedbackSwitch = false
			}, delay)
		},
		simpleDialogState: function () {
			this.simpleDialogSwitch = true
		},
		confirmDialogState: function () {
			this.confirmDialogSwitch = true
		}
	},
	methods: {
		simpleDialogClose () {
			this.simpleDialogSwitch = false
		},
		confirmDialogClose () {
			this.confirmDialogSwitch = false
		}
	},
	mounted () {
		/*setTimeout(function () {
			let onOk = function () {
				confirmDialog('骗子', '这样说违心的话真的好吗？', () => feedback('ok', '那你很棒棒哦！'), ()=>feedback('error','相信明天更美好'))
			}
			simpleDialog('调查', '你有好好对待每一天吗?', onOk)
		},2000)*/
	}
}
</script>

<style scoped="scoped" lang="less">
.loading-circle{
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
}
.loading{
	position: fixed;
	top: 0;
	background-color: rgba(0, 0, 0, .8);
}
.feedback-icon{
	font-size: 50px;
	width: 100%;
}
.feedback-content{
	display: inline-block;
	background-color: rgba(0, 0, 0, .8);
	font-size: 14px;
	max-width: 50%;
	border-radius: 6px;
	padding: 1em 2em;
	color: #FFFFFF;
}
.feedback-msg{
	margin-top: .2em;
	display: block;
	text-align: center;
	font-weight: 600;
}
.notice-wrap, .feedback-wrap{
	position: fixed;
	text-align: center;
	pointer-events: none;
	top: 30%;
	z-index: 30141230;
}
.notice{
	display: inline-block;
	background-color: rgba(0, 0, 0, .6);
	font-size: 14px;
	max-width: 60%;
	border-radius: 6px;
	padding: 1em 2em;
	color: #FFFFFF;
}
</style>