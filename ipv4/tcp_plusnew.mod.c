#include <linux/module.h>
#include <linux/vermagic.h>
#include <linux/compiler.h>

MODULE_INFO(vermagic, VERMAGIC_STRING);

__visible struct module __this_module
__attribute__((section(".gnu.linkonce.this_module"))) = {
	.name = KBUILD_MODNAME,
	.init = init_module,
#ifdef CONFIG_MODULE_UNLOAD
	.exit = cleanup_module,
#endif
	.arch = MODULE_ARCH_INIT,
};

static const struct modversion_info ____versions[]
__used
__attribute__((section("__versions"))) = {
	{ 0x141d70f7, __VMLINUX_SYMBOL_STR(module_layout) },
	{ 0xde1509a4, __VMLINUX_SYMBOL_STR(tcp_unregister_congestion_control) },
	{ 0x3ad7a957, __VMLINUX_SYMBOL_STR(tcp_register_congestion_control) },
	{ 0xa913b7d7, __VMLINUX_SYMBOL_STR(tcp_slow_start) },
	{ 0x671b714e, __VMLINUX_SYMBOL_STR(tcp_cong_avoid_ai) },
	{ 0xc81a6bc3, __VMLINUX_SYMBOL_STR(tcp_reno_cong_avoid) },
	{ 0xbdfb6dbb, __VMLINUX_SYMBOL_STR(__fentry__) },
};

static const char __module_depends[]
__used
__attribute__((section(".modinfo"))) =
"depends=";


MODULE_INFO(srcversion, "1D12E742DCE16C977A8BE63");
