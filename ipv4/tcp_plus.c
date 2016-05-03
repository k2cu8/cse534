
#include <linux/mm.h>
#include <linux/module.h>
#include <linux/math64.h>
#include <net/tcp.h>



u32 tcpplus_ssthresh(struct sock *sk)
{
	const struct tcp_sock *tp = tcp_sk(sk);

	return (unsigned)max(tp->snd_cwnd - tp->snd_cwnd/(6U<<1U), 2U);
}

EXPORT_SYMBOL_GPL(tcpplus_ssthresh);

static struct tcp_congestion_ops tcpplus __read_mostly = {
	.ssthresh	= tcpplus_ssthresh,
	.cong_avoid	= tcp_reno_cong_avoid,
	.owner		= THIS_MODULE,
	.name		= "tcpplus",
};
static int __init tcpplus_register(void)
{
	return tcp_register_congestion_control(&tcpplus);
}

static void __exit tcpplus_unregister(void)
{
	tcp_unregister_congestion_control(&tcpplus);
}

module_init(tcpplus_register);
module_exit(tcpplus_unregister);

MODULE_LICENSE("GPL v2");
MODULE_DESCRIPTION("TCP PLUS");